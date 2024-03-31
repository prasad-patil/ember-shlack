import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
  @tracked
  userID = null;

  /**
   * @type {AuthService}
   */
  @service auth;

  get isDisabled() {
    return !this.userID;
  }
  /**
   *
   * @param {Event & {target: HTMLFormElement}} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    const { target } = evt;
    const val = target.querySelector('select').value;
    console.log('UserID', val);
    this.auth.loginWithUserID(val);
  }

  /**
   *
   * @param {Event & {target: HTMLSelectElement}} evt
   */
  @action
  onSelectChange(evt) {
    const { target } = evt;
    this.userID = target.value;
  }
}
