import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (

      <main class="container">
        <aside class="servers">
          <div class="servers-collection">
            <div class="server focusable server-friends unread" role="button" aria-label="Friends unread">
              <div class="server-icon"></div>
            </div>
          </div>

          <div class="servers-collection">
            <div class="server focusable unread" role="button" aria-label="Discord Developers unread">
              <div class="server-icon"><img src="https://cdn.discordapp.com/icons/41771983423143937/edc44e98a690a1f76c5ddec68a0a6b9e.png" /></div>
            </div>
          </div>

          <div class="servers-collection">
            <div class="server focusable active" role="button" aria-label="My Server" aria-selected="true">
              <div class="server-icon"><img src="https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png" /></div>
            </div>
          </div>
        </aside>

        <aside class="channels">
          <header class="channels-header focusable">
            <h3 role="header" class="channels-header-name">My Server</h3>

          </header>

          <section class="channels-list">
            <header class="channels-list-header focusable">
              <h5>Text Channels</h5>
            </header>

            <ul class="channels-list-text">
              <li class="channel focusable channel-text active">
                <span class="channel-name">general</span>
                <button class="button" role="button" aria-label="Invite"></button>
                <button class="button" role="button" aria-label="settings"><svg></svg></button>
              </li>

              <li class="channel focusable channel-text">
                <span class="channel-name">help</span>
                <button class="button" role="button" aria-label="Invite"><svg></svg></button>
                <button class="button" role="button" aria-label="settings"><svg></svg></button>
              </li>
            </ul>

            <header class="channels-list-header focusable">
              <h5>Voice Channels</h5>
            </header>
          </section>

          <footer class="channels-footer">
            <img class="avatar" alt="Avatar" src="https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png" />
            <div class="channels-footer-details">
              <span class="username">yourself</span>
              <span class="tag">#0001</span>
            </div>
            <div class="channels-footer-controls button-group">
              <button role="button" aria-label="Mute" class="button button-mute"></button>
              <button role="button" aria-label="Deafen" class="button button-deafen"></button>
              <button role="button" aria-label="Settings" class="button button-settings"></button>
            </div>
          </footer>
        </aside>

        <div class="vert-container">
          <menu type="toolbar" class="menu">
            <h2 class="menu-name">general</h2>
          </menu>

          <section class="chat">

          </section>
        </div>
      </main>


    )
  }
}
