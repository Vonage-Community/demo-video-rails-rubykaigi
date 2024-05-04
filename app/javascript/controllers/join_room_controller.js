import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="join-room"
export default class extends Controller {
  static values = {
    apiKey: String,
    sessionId: String,
    participantName: String,
    token: String,
  }
  
  connect() {
    console.log(this.apiKeyValue);
    console.log(this.sessionIdValue);
    console.log(this.participantNameValue);
    console.log(this.tokenValue);

    const room = new VideoExpress.Room({
      apiKey: this.apiKeyValue,
      sessionId: this.sessionIdValue,
      participantName: this.participantNameValue,
      token: this.tokenValue,
      roomContainer: 'room-container',
      
    });
    console.log(room);
    room.join();
  }
}
