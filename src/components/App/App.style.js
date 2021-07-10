import styled from "styled-components";

export const AppStyles = {
    AppContainer: styled.div`
      margin-top: 20px;
  `,
    ImagesContainer: styled.div`
      .cat-images{
        height:200px;
        @media screen and (max-width:600px){
          height:auto;
          width:200px
        }
      }
    `,

    LoadMore: styled.div`
      width: 120px;
      margin: 60px auto;
      padding:10px;
      border: 1px solid #e4e4e4;
      border-radius:6px;
      text-align: center;
      cursor: pointer;
      &:hover{
        background: #e4e4e4
      }
    `
}