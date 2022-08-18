'use strict';

/* eslint-disable no-underscore-dangle */
class NotificationBase {
    /**
     * Constructor for Build Notification
     * @method constructor
     * @param {Object}      config              Configuration specific to the plugin
     * @return {NotificationBase}
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * Get event list for receiving Screwdriver API events
     * @getter events
     * @return {Array}
     */
    get events() {
        return ['build_status', 'job_status'];
    }

    /**
     * Listen to the event and notify users based on their job settings
     * @param {String}      event         Event emmited from Screwdriver
     * @param {Object}      payload       Data emitted with some event from Screwdriver
     * @method notify
     */
    notify(event, payload) {
        try {
            this._notify(event, payload);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }

    // eslint-disable-next-line no-unused-vars
    _notify(event, payload) {
        throw new Error('Not implemented');
    }
}

module.exports = NotificationBase;
