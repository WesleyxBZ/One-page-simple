import {Component, OnInit} from '@angular/core';
import {faTwitter, faYoutube, faSteam, faGithub, faInstagram, faDiscord} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  icons = [
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/wesleyxbz/',
      icon: faInstagram
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/wesley_bz',
      icon: faTwitter
    },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UC_Zab0F0k0oMxvNgZeUfE5A?view_as=subscriber',
      icon: faYoutube
    },
    {
      title: 'Steam',
      link: 'https://steamcommunity.com/id/wesleyxbz',
      icon: faSteam
    },
    {
      title: 'WesleyxBZ #8453',
      link: '',
      icon: faDiscord
    },
    {
      title: 'GitHub',
      link: 'https://github.com/WesleyxBZ',
      icon: faGithub
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
