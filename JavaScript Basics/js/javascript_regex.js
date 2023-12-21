/* 


^ indicates the beginning of the string.
$ indicates the end of the string.

. means "any character" except for a newline
    in case we need to match a dot / period (.) itself, we use the escape sequence concept with a backslash \.
    which tells the compiler to treat the next dot as a character itself and not a special sign. 
* means "any number of this".
.* therefore means an arbitrary string of arbitrary length.
+ means 1 or more of the preceding token - also represented by {1,}
? means 0 or 1 of the preceding token - so it's like the preceding token is optional
| means OR and has preceding and succeeding elements. e.g. (t|T) 

\w means match all words
\W (negation of \w) means match all whitespaces
\s means match all whitespaces
\S (negation of \s) means match all non-whitespace elements (for example words in a sentence)

g - at the end means search is global
i - at the end means search is case insensitive
m - at the end means search is applicable on multiline (so /^I/m will match all lines starting with capital I)

{min, max} means the preceding regex sign / symbol is applicable for these many characters
e.g. 
\w{4,5} means select any words that are between 4 or 5 characters long
\w{3,} means select any words that are 3 or more characters long

character grouping
==================

[] square brackets are used to group characters
e.g.
[fc]at means get all words which are f or c and then followed by at - so we get fat, cat
[a-zA-Z] means check if the characters are in a-z or A-Z

() parethesis is used to group multiple single tokens and is called the capture group
e.g.
(t|T)he means get all 'the' or 'The'

capture groups can also have size definitions
e.g.
(t|e|r){2,3} 
    means check if 2 or 3 characters in this position is any one of the three - t, e or r. 
    so we get substrings like eet, ter, ee, tr, re, ree, rtt, etc.

(ter){2,3} 
    in this case, the letters ARE NOT IN OR relation. So they must appear in this order as a string
    and since they must be atleast 2 or 3, so we get two matches only 'terter' and 'terterter'

tr{2,3} will act only on 'r'. here grouping doesn't work since we don not have parenthesis.
        so we will get matches like trr, trrr
*/

// =========================================================================

// THERE ARE TWO METHODS OF DECLARING REGEX IN JAVASCRIPT

// 1. Using the Regular Expression (Regex) constructor

var regex1 = new RegExp("hello"); // in this case we do not need the prefix and suffix forward slash
var string1 = "hello world";
console.log(regex1.test(string1)); // prints true

// 2. Using the Regular Expression (Regex) literal

var regex2 = /hello/;
var string2 = "hello world";
console.log(regex2.test(string2)); // prints true
