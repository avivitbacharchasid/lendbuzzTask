export default class Todo {

    load() {
        cy.visit("");
    }

    //Elements

    private get titel() {
        return ('h1');

    }

    private get createTodo() {
        return ('.new-todo');
    }

    private get label() {
        return ('.view > label');
    }

    private get fillters() {
        return ('.filters');
    }

    private get button() {
        return ("button");
    }

    private get input() {
        return ('[data-reactid=".0.0.1"]');
    }

    private get checkbox() {
        return ('.toggle');


    }

    private get newtask() {
        return ('[data-reactid=".0.1.2.$23c2cbda-e71f-441c-83dc-62bc3e35a50a"] > .view > label')
    }



    private get completed() {
        return ('.clear-completed');
    }

    private get numbersOfitems() {
        return ('footer');
    }



    //Methods



    getTitel() {
        return cy.get(this.titel);

    }

    newTodo(task: string) {
        return cy.get(this.createTodo).type(task);
    }

    labelVisible() {
        return cy.get(this.label);
    }

    filltersPresent() {
        return cy.get(this.fillters);
    }

    ClickonThebutton() {
        return cy.get(this.button).click({ force: true });
    }

    inputArea() {
        return cy.get(this.input);
    }

    doneTask() {
        return cy.get(this.checkbox).click({ force: true });
    }

    completedPresnt() {
        return cy.get(this.completed);
    }

    ittemsremain() {
        return cy.get(this.numbersOfitems);
    }





}