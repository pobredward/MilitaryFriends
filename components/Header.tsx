// components/Header.tsx
import styled from "@emotion/styled";
import Center from "./Center";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <Center>
        <TopNav>
          <UserMenu>
            <UserMenuItem
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
              <UserIcon width={24} height={24} />
              {isDropdownOpen && (
                <DropdownMenu>
                  <DropdownItem>
                    <Link href="/login">로그인</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/register">회원가입</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/orders">주문목록</Link>
                  </DropdownItem>
                </DropdownMenu>
              )}
            </UserMenuItem>
            <UserMenuItem>
              <Link href="/cart">
                <ShoppingCartIcon width={24} height={24} />
              </Link>
            </UserMenuItem>
          </UserMenu>
        </TopNav>
        <MainNav>
          <h2>Military Friends</h2>
          <NavLinks>
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/my-account">My account</Link>
          </NavLinks>
        </MainNav>
      </Center>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #fff;
`;

const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  background-color: transparent; /* 배경색 투명 */
`;

const UserMenu = styled.div`
  display: flex;
  gap: 20px;
`;

const UserMenuItem = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  white-space: nowrap;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
`;

export default Header;
