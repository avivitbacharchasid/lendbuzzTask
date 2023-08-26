import { escapeSelector } from "cypress/types/jquery";
import Todo from "../pages/Todo";

describe("Todo Tests cases", () => {
    let todo: Todo;
    beforeEach(() => {
        todo = new Todo();
        todo.load();

    })
    it('should be able to add a todo', () => {
        todo.getTitel().should("be.visible");
        todo.newTodo('Go to the docktor{enter}');
        todo.labelVisible().should('contain.text', 'Go to the docktor');
        todo.filltersPresent().should("be.visible");

    })

    it('should be able to delete a todo', () => {
        todo.getTitel().should("be.visible");
        todo.newTodo('Go to the docktor{enter}');
        todo.labelVisible().should('contain.text', 'Go to the docktor');
        todo.filltersPresent().should("be.visible");
        todo.ClickonThebutton();
        todo.inputArea().should("be.visible");






    })

    it('mark task as done', () => {
        todo.getTitel().should("be.visible");
        todo.newTodo('Go to the docktor{enter}');
        todo.labelVisible().should('contain.text', 'Go to the docktor');
        todo.filltersPresent().should("be.visible");
        todo.doneTask();
        todo.completedPresnt().should("be.visible")

    })









})
