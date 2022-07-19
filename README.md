# Book
Book is basically what it sounds like. It paginates very long strings into a dictionary data structure. Pagination is controlled by a delimiter (we call it an anchor), and a lineCount for the size each page.

## Main Purpose
Basically, it is used for probablistic regex matching. In case you don't believe your patterns are very large, and you don't need all of the matches from a regex search, you can search on chunks of data in your string in paginated way. It's like the difference between searching through a scroll and a book with page numbers.

