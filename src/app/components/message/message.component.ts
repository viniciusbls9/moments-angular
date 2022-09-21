import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  faTimes = faTimes;

  constructor(public messagesService: MessagesService) {}

  ngOnInit(): void {}
}
