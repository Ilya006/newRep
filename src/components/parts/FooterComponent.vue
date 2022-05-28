<template>
  <footer class="footer">
    <div class="form-subscribe">
      <div class="form-subscribe__text">
        <p>Subscribe to our newsletter</p>
        <span>
          Subscribe to the Week in Review newsletter and get the latest trends
          directly to your inbox
        </span>
      </div>
      <form class="form-subscribe__wrap">
        <input
          type="text"
          class="form-subscribe__email"
          placeholder="Your email"
          title=""
          name="email"
          required="required"
        />
        <input
          type="button open-modal"
          class="form-subscribe__submit"
          value="Subscribe"
          title=""
        />
        <label class="form-subscribe__label">
          <input type="checkbox" class="form-subscribe__checkbox" title="" />
          <span class="form-subscribe__span">
            Unsubscribe at any time. T&Cs and
            <a href="#">Privacy Policy</a>
          </span>
        </label>
      </form>
    </div>
    <div class="social-wrap">
      <div class="footer-logo">
        <img src="@/assets/img/content/footer-logo.svg" alt="" />
        <span class="footer-logo__text">The World’s Dapp Store</span>
      </div>
      <ul class="social">
        <li class="social__item social__item">
          <a href="#" class="social__link open-modal">
            <img src="@/assets/img/content/fb.svg" alt="" />
          </a>
        </li>
        <li class="social__item social__item">
          <a href="#" class="social__link open-modal">
            <img src="@/assets/img/content/tw.svg" alt="" />
          </a>
        </li>
        <li class="social__item social__item">
          <a href="#" class="social__link open-modal">
            <img src="@/assets/img/content/di.svg" alt="" />
          </a>
        </li>
        <li class="social__item social__item">
          <a href="#" class="social__link open-modal">
            <img src="@/assets/img/content/reddit.svg" alt="" />
          </a>
        </li>
        <li class="social__item social__item">
          <a href="#" class="social__link open-modal">
            <img src="@/assets/img/content/tg.svg" alt="" />
          </a>
        </li>
        <li class="social__item social__item">
          <a href="#" class="social__link open-modal">
            <img src="@/assets/img/content/yt.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-nav">
      <nav class="footer-nav__menu">
        <div class="footer-nav__wrap">
          <span class="footer-nav__title">Products</span>
          <ul class="footer-nav__list">
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link">Rankings</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">NFTs</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Token Explorer</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Portfolio</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Token swap</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Airdrops</a>
            </li>
          </ul>
        </div>
        <div class="footer-nav__wrap">
          <span>Company</span>
          <ul class="footer-nav__list">
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">About us</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Press</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Disclaimer</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Privacy policy</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">
                Terms and conditions
              </a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Careers</a>
            </li>
          </ul>
        </div>
        <div class="footer-nav__wrap">
          <span>Resources</span>
          <ul class="footer-nav__list">
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Blog</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">
                Industry Overview
              </a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Reports</a>
            </li>
          </ul>
        </div>
        <div class="footer-nav__wrap">
          <span>Developers</span>
          <ul class="footer-nav__list">
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">
                Submit a project
              </a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Advertising</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">DappRadar API</a>
            </li>
          </ul>
        </div>
        <div class="footer-nav__wrap">
          <span>Recommendations</span>
          <ul class="footer-nav__list">
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">MetaMask</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">MyEtherWallet</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">TokenPocket</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Huobi Wallet</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">imToken</a>
            </li>
            <li class="footer-nav__item">
              <a href="#" class="footer-nav__link open-modal">Bitkeep</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="use-services">
        <p class="use-services__text">
          List of services that we’re using to calculate data:
        </p>
        <img
          src="@/assets/img/content/provider-cryptocompare.webp"
          class="cryptocompare-logo"
          alt=""
          title=""
        />
        <img
          src="@/assets/img/content/provider-coingecko.webp"
          class="coingecko-logo"
          alt=""
          title=""
        />
        <img
          src="@/assets/img/content/provider-marketcapone.webp"
          class="marketcapone-logo"
          alt=""
          title=""
        />
      </div>
    </div>
    <div class="copyright">© 2018-2022 DappRadar, UAB</div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>
