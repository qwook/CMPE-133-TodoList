
This project can be viewed online at:  
http://qwook.github.io/CMPE-133-TodoList/

# Model-View-Controller in a Web Application by Henry Tran

In this project, I created a todo-list application using the Model-View-Controller pattern. The todo-list has the ability to add items to the todo-list, mark the items as done, and remove the item from the list. There is also an ability to actively view the models in the application as they change.

To make this project possible, I used the framework [React](https://facebook.github.io/react/) which combines the controller and the view together into one neat class. I used [Bootstrap](https://getbootstrap.com/) for the CSS.

The main language used is JSX, which is built on top of Javascript. It allows for creation of views using HTML-like syntax inline with Javascript syntax. Because of this, the view (HTML) lives inside the controller (Javascript).

# File / Class Walkthrough

## index.html
Static webpage that loads in all the javascript and CSS files.

## gruntfile.js
Defines all the tasks/task configurations. It essentially acts as a javascript "makefile."

## src/index.js
Loads the initial view (AppView) into the webpage.

## src/model.js
Provides two classes `Model` and `Collection` in which model structures can derive themselves off of.

The **Model** class has the methods `getProp()` and `setProp()` which allows the class to be used like a map data structure.

The **Collection** class has the methods `insert` and `remove` which allows the class to be used like an array data structure.

Both `Model` and `Collection` derive off of an **EventDispatcher** class which allows the models to tell React when data inside of it has changed.

## src/AppView.jsx
Initializes the initial *model* as `todoListModel`, prepopulated with a collection of `TodoListItemModel` instances.

Defines the **AppView** class, which contains the two subviews `TodoListView` and `RawModelView`.

The `AppView` class passes the initial `todoListModel` to both the `TodoListView` and `RawModelView` instances.

## src/TodoListView.jsx
Defines the class **TodoListView**.

It references the *model* of the todo-list collection as `this.props.model`.

It renders the actual *view* of the todo-list collection in the `render()` and `renderItemView()` methods.

It provides *controller* methods `addItem()` and `removeItem()` which mutate the todo-list collection model. These controller methods are binded to button components in the view.

## src/TodoListItemView.jsx
Defines the class **TodoListItemView**.

It references the individual todo-list item *model* as `this.props.model`.

It renders the actual *view* of each todo-list item in the `render()` methods.

It provides the *controller* method `markAsDone()` which will change the `done` property in the individual `TodoListItem` model. This controller method is binded to one of the buttons in the view.

The click event for the remove button is propogated up to the parent view.

## src/RawModelView.jsx
Defines the class **RawModelView**.

This class contains a view which displays the model data in a JSON style. It demonstrates that when the *model* is manipulated by `TodoListView` and `TodoListItemView`, the changes propogate and can be seen throughout different views.

## src/TodoListItemModel.jsx
Defines the class **TodoListItemModel**.

It gives an easy constructor for the actual todo-list item model and prepopulate it with default values. It also assigns each models with an automatically-generated UUID. React's views need the items to have a unique identifier, which is what the UUID is used for later.

## What Recurring Problem did it Solve?
Most unexperienced developers would attack the Todo-List problem by creating just one class and arbitrarily binding HTML events to javascript code. It creates a lot of problems with coupling. A lot of code ends up getting written twice as well.

**MVC** helps to split up code into identifiable classes, and as a result decouples the code. HTML elements don't need to be "juggled" with updates/changes to the model. The code is then much more legible.

MVC has "interchangable parts" which allows the codebase to be easily change. Views and Controllers can be easily swapped out or replaced without changing the structure of the Models.

# Loading a Local Version the Todo List

1. Download nodejs from https://nodejs.org.
2. CD into this project directory
3. Run `npm install -g grunt`
4. Run `npm install -g bower`
5. Run `npm install .`
6. Run `bower install`
7. Run `grunt`
8. Open "index.html"
