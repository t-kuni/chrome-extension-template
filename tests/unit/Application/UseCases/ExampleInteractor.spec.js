const assert = require('assert');

import ExampleInteractor from "../../../../src/Application/UseCases/ExampleInteractor";

describe('ExampleInteractor.js', () => {
    it('example-test', () => {
        const interactor = new ExampleInteractor();
        const actual = interactor.exec();
        assert.equal(actual, 'test');
    });
});