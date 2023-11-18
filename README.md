# Nested Validation

Reproduction repository for https://github.com/angular/angular/issues/42815

## Description

When you'll start the application you'll see both FormGroups and nested CVA on the same page, to see the difference beetwen the two implementations.

Actually, the only difference you will see, is that the "validation" bug is only present for nested CVA.
The form with nested CVA is marked as "valid" even though is should not be, as there is some required fields that are not filled.

## CVA vs FormGroups

Here are some stats regarding the TypeScript files:

|                      | CVA | FormGroups |
|----------------------|----:|-----------:|
| File Count           |   7 |          7 |
| Line Count (code)    | 254 |        122 |
| Line Count (total)   | 310 |        151 |
| Main chunk size (kB) | 152 |        150 |

## Should I use FormGroups?

Well, both implementations are very different in terms of philosophy.
CVA allows you to directly control the structure of your FormControls from the Component itself, whereas the FormGroups approach tends to split the FormControls structure inside their own files, while still making them accessible from your components.

IMO, making files smaller by splitting the component's logic (interactions between your HTML & TS file) and the form's data structure, makes it easier to maintain and test your code.
Also, this approach allows you to use the same FormGroup for 2 different component integrations, as the data structure/validation may be the same at two different points of your website but with two very different designs.
And finally, the logic to mark all input as checked is IMO simpler with the `touched$` observable from FromGroups, than with the `appMarkAllAsTouched` directive for the CVA.

But the main deciding factors will probably be the following for you:

### When using nested CVA:

You cannot access the structure/FormControls of nested CVA, you only get the value output of the entire stack.
This is both a bad & good thing, it makes nested components act as black boxes, you don't know how they work and you should not, but at the same times, it makes it impossible to easily change the state of a nested FormControl (like disabling a nested input when a root input has changed its value).

### When using nested FormGroups:

You cannot easily build an entire stack of nested controls by simply giving the values to your components, you have to build the stack of controls first in your FormGroups and then give them to your components. Fortunately, even though it differs a bit from the CVA philosophy, at the end you still end up with a smaller amount of code.
