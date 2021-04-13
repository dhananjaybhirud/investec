import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
})
export class HomeSearchComponent implements OnInit {
  public inputValue: string = 'darth';
  error;

  // This value will be updated only after debounce
  public debouncedInputValue = this.inputValue;

  // Holds results
  public people$: Subject<any> = new Subject();

  // Observable for debouncing input changes
  private searchDecouncer$: Subject<string> = new Subject();

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    // Setup debouncer
    this.setupSearchDebouncer();

    // Do initial search for 'darth'
    this.search(this.inputValue);
  }

  public onSearchInputChange(term: string): void {
    // `onSearchInputChange` is called whenever the input is changed.
    // We have to send the value to debouncing observable
    this.searchDecouncer$.next(term);
  }

  private setupSearchDebouncer(): void {
    // Subscribe to `searchDecouncer$` values,
    // but pipe through `debounceTime` and `distinctUntilChanged`
    this.searchDecouncer$
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((term: string) => {
        // Remember value after debouncing
        this.debouncedInputValue = term;

        // Do the actual search
        this.search(term);
      });
  }

  private search(term: string): void {
    // Clear results
    this.people$.next(null);

    // Make API call
    const url = `https://api.adviceslip.com/advice/search/${term
      .toLowerCase()
      .trim()}`;
    this.http.get(url).subscribe(
      (results) => {
        this.people$.next(results);
        console.log(results);
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
