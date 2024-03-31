import Route from '@ember/routing/route';
import { ALL_TEAMS } from '../teams';

export default class TeamsTeamRoute extends Route {
  /**
   * @param {{ teamId: string; }} team
   */
  model(team) {
    return ALL_TEAMS.find((t) => t.id == team.teamId);
  }
}
