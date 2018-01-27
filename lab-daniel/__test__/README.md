# Lab 10 Stacks and Queues

## Nd Module

  This module contains a single unnamed class and constructor function which is used to instantiate node objects for the other modules. It takes a single argument which represents the value assigned to the node.

## Stack Module

  This module contains an unnamed class, constructor, and two prototype methods. It is used to instantiate the shell of the Stack as well as push, pop, and peek the stack. The constructor requires no arguments but can be passed an optional maximum size which defaults to 1048.

  1. Push: similar to the array method push adds and item to the stack, however instead of adding it to the end of an array, it adds it to the top of the stack. This method takes a single argument in the form of a value which it passes through the node constructor before putting the returned node ontop of the stack. Increments the stack size before ending the method.

  2. Pop: just like push this method is similar to the array method. It's designed to remove the top item from the stack and return it for use. This modifies the stack by removing the top item and dereferencing it from the stack. The method takes no arguments. Decrements the stack size before ending the function.

  3. Peek: The purpose of this method is to look at the top item of the stack, it literally just returns the stack top property.

## Queue Module

  This module like the other two contains a nameless class, constructor and two methods. It is used to instantiate a queue for node objects to be inserted into. The constructor requires no arguments however much like the stack constructor it can take an optional maxSize which defaults to 1048 as well.

  1. Enqueue: This method is used to insert nodes into the queue, it inserts them at the end of the line assigning them to the next value of the last node in the queue. It takes a single argument which is passed through the node constructor to instantiate the node to be inserted. This then increments the queue size.

  2. Dequeue: This method is used to remove the front item from the queue. This is done by assigning the front value of the queue to the second node after placing the previous front in a temp variable to return. It then changes the next of the node being removed to null, decrements the queue size and returns the node that was removed.