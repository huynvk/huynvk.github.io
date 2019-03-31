// @flow

import React from 'react'
import Section from '../components/Section'
import styled from 'styled-components'

const DownloadLink = styled.a`
  margin-right: 1rem;
  img {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
`

const Home = () => (
  <Section
    isHomeSection
    title={
      <span>
        <img src="/images/shino-icon.png" /> Shino - Trợ lý cho mẹ bầu
      </span>
    }
    content={
      <React.Fragment>
        <p>
          Ứng dụng trên iOS và Android theo dõi sức khoẻ thai kì và giúp mẹ
          nhiều việc trong thai kì, để mẹ an tâm hơn và thoải mái hơn trong quá
          trình mang thai.
        </p>
        <p>Cài đặt miễn phí tại:</p>
        <div>
          <DownloadLink
            href="https://play.google.com/store/apps/details?id=huynvk.com.pgassistant"
            target="_blank"
          >
            <img src="/images/app_store.png" />
          </DownloadLink>
          <DownloadLink
            href="https://www.facebook.com/trolymebau/"
            target="_blank"
          >
            <img src="/images/google_play.png" />
          </DownloadLink>
        </div>
      </React.Fragment>
    }
    image="https://leap.expert/images/img-product.png"
  />
)

export default Home
