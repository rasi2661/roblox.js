const got = require('got');

export class User {
  id: number;
  constructor(userid: number) {
    this.id = userid;
  }
  async username() {
    try {
      const response = await got(`https://users.roblox.com/v1/users/${this.id}`);
      return JSON.parse(response.body).name;
    } catch (error) {
      throw error.response.body;
    }
  }
  async age() {
    try {
      const response = await got(`https://users.roblox.com/v1/users/${this.id}`);
      let today: Date = new Date();
      let createdDate: Date = new Date(JSON.parse(response.body).created);
      let diffTime = Math.abs(today.getTime() - createdDate.getTime());
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    } catch (error) {
      throw error.response.body;
    }
  }
  async description() {
    try {
      const response = await got(`https://users.roblox.com/v1/users/${this.id}`);
      return JSON.parse(response.body).description;
    } catch (error) {
      throw error.response.body;
    }
  }
  async status() {
    try {
      const response = await got(`https://users.roblox.com/v1/users/${this.id}/status`);
      return JSON.parse(response.body).status;
    } catch (error) {
      throw error.response.body;
    }
  }
}
