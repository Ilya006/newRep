<template>
  <header class="header">
    <div class="header__wrap">
      <a href="#" class="header-logo">
        <span class="mobile-only">
          <img src="@/assets/img/logo_m.svg" alt="" />
        </span>

        <span class="header-logo__img">
          <img src="@/assets/img/logo.svg" alt="" />
        </span>
      </a>
      <div class="menu">
        <button class="menu__button">
          <img src="@/assets/img/menu.svg" alt="" />
        </button>
        <ul class="menu__list">
          <li class="menu__item">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/menu-toggle-1.svg" alt="" />
              <div class="menu__text-wrap">
                <div>
                  <span class="menu__title">Rankings</span>
                </div>
                <p>Track, discover and analyze the latest dapps</p>
              </div>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/menu-toggle-2.svg" alt="" />
              <div class="menu__text-wrap">
                <div>
                  <span class="menu__title">DeFi</span>
                </div>
                <p>Discover, track, analyze and view DeFi rankings</p>
              </div>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/menu-toggle-3.svg" alt="" />
              <div class="menu__text-wrap">
                <div>
                  <span class="menu__title">NFTs</span>
                </div>
                <p>Track realtime NFT markets</p>
              </div>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/menu-toggle-4.svg" alt="" />
              <div class="menu__text-wrap">
                <div>
                  <span class="menu__title">Portfolio</span>
                  <mark>hot</mark>
                </div>
                <p>Track, analyze and manage your wallets</p>
              </div>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/menu-toggle-5.svg" alt="" />
              <div class="menu__text-wrap">
                <div>
                  <span class="menu__title">Token Explorer</span>
                  <mark>new!</mark>
                </div>
                <p>View and swap with the latest token prices and data</p>
              </div>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/menu-toggle-6.svg" alt="" />
              <div class="menu__text-wrap">
                <div>
                  <span class="menu__title">Airdrops</span>
                  <mark class="red-mark">now live!</mark>
                </div>
                <p>Sign up for free DappRadar Airdrops</p>
              </div>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/menu-toggle-7.svg" alt="" />
              <div class="menu__text-wrap">
                <div>
                  <span class="menu__title">Developers</span>
                </div>
                <p>Build and advertise your dapps to the world</p>
              </div>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/menu-toggle-8.svg" alt="" />
              <div class="menu__text-wrap">
                <div>
                  <span class="menu__title">Reports</span>
                </div>
                <p>Read the latest industry reports</p>
              </div>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link open-modal">
              <img src="@/assets/img/menu-toggle-9.svg" alt="" />
              <div class="menu__text-wrap">
                <div>
                  <span class="menu__title">Industry Overview</span>
                </div>
                <p>A complete dapp industry overview</p>
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
        <img src="@/assets/img/search.svg" alt="" />
      </button>
      <button type="button" class="notifications open-modal">
        <img src="@/assets/img/bell.svg" alt="" />
      </button>
      <div class="account-menu">
        <div class="account-menu__login open-modal">
          <img src="@/assets/img/user.svg" alt="" />
          <img src="@/assets/img/drop.svg" alt="" />
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
