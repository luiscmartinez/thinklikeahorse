import React from "react"
import styled from "styled-components"

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="banner">
        <strong className="white-text">
          Think Like A Horse - Natural Horsemanship
        </strong>
        <img
          src={"http://www.thinklikeahorse.org/images/horsedivider.gif"}
          alt="Rick riding Buddy"
        />
        <p>Horses love it when their owners understand them.</p>
        <p>Horsemanship is about the horse teaching you about yourself.</p>
        <p>
          <i>
            "This is a Private Site-you only have permission to use if you agree
            to Release"
          </i>
        </p>
      </div>
    </BannerWrapper>
  )
}

export default Banner

const BannerWrapper = styled.div`
  padding: 0.3rem;
  background-color: #771b15;
  .banner {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    color: #f5b562;
    border: 2px solid #f5b562;
    padding: 0.3rem;
    background-color: #771b15;
  }
  .white-text {
    color: white;
    font-size: 1rem;
  }
  p {
    margin-bottom: 0.3rem;
  }
  img {
    margin-bottom: 1.45rem;
  }
`
