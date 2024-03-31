import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import AuthService from 'shlack/services/auth';

export default class LoginRoute extends Route {
  /**
   * @type {AuthService}
   */
  @service auth;
  /**
   *
   * @param {*} transition
   */
  async beforeModel(transition) {
    await super.beforeModel(transition);
    if (this.auth.currentUserID) {
      this.transitionTo('teams');
    }
  }
}
