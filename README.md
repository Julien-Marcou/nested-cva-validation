# Nested Validation

Reproduction repository for https://github.com/angular/angular/issues/42815

## Description

In the `src/main.ts` file you can switch between `AppModuleWithCVA` and `AppModuleWithFormGroups` to see the difference beetwen the two implementations.

Actually, the only difference you will see, is that the bug is only present for CVA.

## CVA vs FormGroups

|            | CVA | FormGroups |
|------------|----:|-----------:|
| File Count |  13 |         14 |
| Line Count | 304 |        171 |

## Should I use FormGroups?

Well, both implementations are very different in terms of philosophy.
CVA allows you to directly control the structure of your FormControls from the Component itself, whereas the FormGroups approach tends to split the FormControls structure inside their own files, while still making them accessible from your components.

IMO, making files smaller by splitting the component's logic (interactions between your HTML & TS file) and the form's data structure, makes it easier to maintain and test your code.
Also, this approach allows you to use the same FormGroup for 2 different component integrations, as the data structure/validation may be the same at two different points of your website but with two very different designs.

But the main deciding factors will probably be the following for you:

### When using nested CVA:

You cannot access the structure/FormControls of nested CVA, you only get the value output of the entire stack.
This is both a bad & good thing, it makes nested components act as black boxes, you don't know how they work and you should not, but at the same times, it makes it impossible to easily change the state of a nested FormControl (like disabling a nested input when a root input has changed its value).

### When using nested FormGroups:

You cannot easily build an entire stack of nested controls by simply giving the values to your components, you have to build the stack of controls first in your FormGroups and then give them to your components. Fortunately, even though it differs a bit from the CVA philosophy, at the end you still end up with a smaller amount of code.
