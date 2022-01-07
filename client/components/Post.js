import styled from "styled-components";

function Post() {
  return (
    <Wrapper>
      <img src="./assets/images/destination.jpg" alt="" className="post_img" />

      <div className="post_data">
        <h4 className="post_title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          debitis, quibusdam ducimus doloribus culpa expedita.
        </h4>

        <div className="post_owner">
          <div className="post_info">
            <img
              src="./assets/images/time.svg"
              alt=""
              className="post_info_icon"
            />
            <p className="post_info_text">Thur 20, 2022 at 20:15</p>
          </div>
          <div className="post_info">
            <img
              src="./assets/images/avatar.svg"
              alt=""
              className="post_info_icon"
            />
            <p className="post_info_text">by Anas Samoudi</p>
          </div>
        </div>

        <p className="post_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ex
          nemo tempora ratione, voluptas aliquam fugiat similique debitis error.
          Id consequuntur nostrum eius molestias alias repudiandae dolor
          voluptas repellendus explicabo.
        </p>
      </div>
    </Wrapper>
  );
}

export default Post;

const Wrapper = styled.div`
  border: 1px solid #eee;
  padding: 1rem;
  padding-right: 1.5rem;
  display: grid;
  grid-template-columns: 2fr 4fr;
  gap: 1rem;
  border-radius: 0.5rem;
  .post_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }
  .post_title {
    font-weight: 600;
    display: block; /* or inline-block */
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 4.8em;
    line-height: 1.6em;
  }

  .post_owner {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .post_info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }

  .post_info_text {
    font-size: 0.8rem;

    color: ${(props) => props.theme.greyText};
  }

  .post_text {
    display: block; /* or inline-block */
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 4.8em;
    line-height: 1.6em;
    font-size: 0.9rem;
    color: ${(props) => props.theme.darkGreyText};

    &::after {
      content: "...";
    }
  }
`;
