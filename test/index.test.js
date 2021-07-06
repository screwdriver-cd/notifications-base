'use strict';

const { assert, expect } = require('chai');
const sinon = require('sinon');

describe('index test', () => {
    let instance;
    let NotificationBase;

    beforeEach(() => {
        this.consoleSpy = sinon.spy(console, 'error');

        // eslint-disable-next-line global-require
        NotificationBase = require('../index');
        instance = new NotificationBase({});
    });

    afterEach(() => {
        this.consoleSpy.restore();
        instance = null;
    });

    it('can create a notification base class instance', () => {
        assert.instanceOf(instance, NotificationBase);
    });

    it('should get events', () => {
        assert.deepEqual(instance.events, ['build_status']);
    });

    it('should catch an error', () => {
        instance.notify({});
        // eslint-disable-next-line
        expect(this.consoleSpy.calledOnce).to.be.true;
    });
});
