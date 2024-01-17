import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import CartIcon from "@/components/icons/CartIcon";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const Featured = () => {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              {" "}
              <Title>Pro Anywhere</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                aliquid fugiat excepturi illo deserunt possimus optio nam soluta
                accusamus eum. Dignissimos deleniti voluptates repellendus
                maiores!
              </Desc>
              <ButtonsWrapper>
                <ButtonLink href={""} outline={1} white={1}>
                  Read more
                </ButtonLink>
                <Button white>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"
              alt=""
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
};

export default Featured;
