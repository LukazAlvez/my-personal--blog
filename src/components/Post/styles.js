import styled from 'styled-components';

export const Posts = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  .post {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.1);
  }
  .user {
    display: flex;
    align-items: center;
  }
  .user h3 {
    color: lightcoral;
    margin-left: 20px;
    font-size: 25px;
  }

  .content {
    margin-left: 80px;
    padding: 10px;
    color: rgba(0, 0, 0, 0.7);
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 100%;
    border: 5px solid lightcoral;
  }

  @media (max-width: 720px) {
    .user h3 {
      font-size: 20px;
    }
    .content {
      font-size: 12px;
      margin-left: 60px;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
