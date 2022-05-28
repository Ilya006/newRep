<template>
  <header class="header">
    <div class="header__wrap">
      <a href="#" class="header-logo">
        <span class="mobile-only">
          <img src="@/assets/img/content/logo_m.svg" alt="" />
        </span>

        <span class="header-logo__img">
          <img src="@/assets/img/content/logo.svg" alt="" />
        </span>
      </a>
      <div class="menu">
        <button class="menu__button">
          <img src="@/assets/img/content/menu.svg" alt="" />
          <p class="open-modal"></p>
        </button>
        <ul class="menu__list">
          <li class="menu__item open-modal">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/content/menu-toggle-1.svg" alt="" />
              <div class="menu__text-wrap open-modal">
                <div class="open-modal">
                  <span class="menu__title open-modal">Rankings</span>
                </div>
                <p class="open-modal">
                  Track, discover and analyze the latest dapps
                </p>
              </div>
            </a>
          </li>
          <li class="menu__item open-modal">
            <a href="#" class="menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-toggle-2.svg"
                alt=""
              />
              <div class="menu__text-wrap open-modal">
                <div class="open-modal">
                  <span class="menu__title open-modal">DeFi</span>
                </div>
                <p class="open-modal">
                  Discover, track, analyze and view DeFi rankings
                </p>
              </div>
            </a>
          </li>
          <li class="menu__item open-modal">
            <a href="#" class="menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-toggle-3.svg"
                alt=""
              />
              <div class="menu__text-wrap open-modal">
                <div class="open-modal">
                  <span class="menu__title open-modal">NFTs</span>
                </div>
                <p class="open-modal">Track realtime NFT markets</p>
              </div>
            </a>
          </li>
          <li class="menu__item open-modal">
            <a href="#" class="menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-toggle-4.svg"
                alt=""
              />
              <div class="menu__text-wrap open-modal">
                <div class="open-modal">
                  <span class="menu__title open-modal">Portfolio</span>
                  <mark>hot</mark>
                </div>
                <p class="open-modal">Track, analyze and manage your wallets</p>
              </div>
            </a>
          </li>
          <li class="menu__item open-modal">
            <a href="#" class="menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-toggle-5.svg"
                alt=""
              />
              <div class="menu__text-wrap open-modal">
                <div class="open-modal">
                  <span class="menu__title open-modal">Token Explorer</span>
                  <mark>new!</mark>
                </div>
                <p class="open-modal">
                  View and swap with the latest token prices and data
                </p>
              </div>
            </a>
          </li>
          <li class="menu__item open-modal">
            <a href="#" class="menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-toggle-6.svg"
                alt=""
              />
              <div class="menu__text-wrap open-modal">
                <div class="open-modal">
                  <span class="menu__title open-modal">Airdrops</span>
                  <mark class="red-mark">now live!</mark>
                </div>
                <p class="open-modal">Sign up for free DappRadar Airdrops</p>
              </div>
            </a>
          </li>
          <li class="menu__item open-modal">
            <a href="#" class="menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-toggle-7.svg"
                alt=""
              />
              <div class="menu__text-wrap open-modal">
                <div class="open-modal">
                  <span class="menu__title open-modal">Developers</span>
                </div>
                <p class="open-modal">
                  Build and advertise your dapps to the world
                </p>
              </div>
            </a>
          </li>
          <li class="menu__item open-modal">
            <a href="#" class="menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-toggle-8.svg"
                alt=""
              />
              <div class="menu__text-wrap open-modal">
                <div class="open-modal">
                  <span class="menu__title open-modal">Reports</span>
                </div>
                <p class="open-modal">Read the latest industry reports</p>
              </div>
            </a>
          </li>
          <li class="menu__item open-modal">
            <a href="#" class="menu__link open-modal">
              <img
                class="open-modal"
                src="@/assets/img/content/menu-toggle-9.svg"
                alt=""
              />
              <div class="menu__text-wrap open-modal">
                <div class="open-modal">
                  <span class="menu__title open-modal">Industry Overview</span>
                </div>
                <p class="open-modal">A complete dapp industry overview</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header__nav">
      <nav class="header-menu">
        <ul class="header-menu__list">
          <li class="header-menu__item">
            <a href="#" class="header-menu__link open-modal">Rankings</a>
          </li>
          <li class="header-menu__item">
            <a href="#" class="header-menu__link current open-modal">
              Portfolio
            </a>
          </li>
          <li class="header-menu__item">
            <a href="#" class="header-menu__link open-modal">NFTs</a>
          </li>
          <li class="header-menu__item">
            <a href="#" class="header-menu__link open-modal">DeFi</a>
          </li>
          <li class="header-menu__item">
            <a href="#" class="header-menu__link open-modal">RADAR</a>
          </li>
          <li class="header-menu__item">
            <a href="#" class="header-menu__link open-modal">Blog</a>
          </li>
        </ul>
      </nav>
      <button type="button" class="search open-modal">
        <img src="@/assets/img/content/search.svg" alt="" />
      </button>
      <button type="button" class="notifications open-modal">
        <img src="@/assets/img/content/bell.svg" alt="" />
      </button>
      <div class="account-menu">
        <div class="account-menu__login open-modal">
          <img src="@/assets/img/content/user.svg" alt="" />
          <img src="@/assets/img/content/drop.svg" alt="" />
        </div>
        <span class="account-menu__text open-modal">Connect</span>
      </div>
      <div class="open-menu open-modal">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
import common from "@/mixins/common";

export default {
  name: "HeaderComponent",
  mixins: [common],
};
</script>
