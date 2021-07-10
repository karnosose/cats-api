import styled from "styled-components";

export const SidebarStyles = {
    SidebarWrapper: styled.div`
      min-width: max-content;
      border: 1px solid #E4E4E4;
      margin: 20px 20px;
      border-radius:6px;
      padding:5px;
  `,

    CategoryList: styled.div`
      display: flex;
      flex-direction: column;
      .active-category {
        background: orange; 
        border-radius: 6px
    `,

    CategoryItem: styled.div`
      color:black;
      padding: 10px ;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: #E4E4E4;
      }
    `
}