export { Panel };


/*************************************************************************************************/
/* Panel                                                                                         */
/*************************************************************************************************/

class Panel {
    constructor(state, model, dispatcher) {
        this.state = state;
        this.model = model;
        this.dispatcher = dispatcher;

        this.clearButton = document.getElementById("clear-button");
        this.runButton = document.getElementById("run-button");

        this.setupDispatcher();
        this.setupRunButton();
    }

    async init() {
    }

    setupDispatcher() {
    }

    setupRunButton() {
        this.clearButton.addEventListener("click", (e) => {
            this.dispatcher.clear(this);
        });

        this.runButton.addEventListener("click", (e) => {
            this.dispatcher.run(this, this.model.getCode());
        });
    }
};
