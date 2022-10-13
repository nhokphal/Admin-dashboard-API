import {
    Home,
    LocalGroceryStore,
    Person,
    Leaderboard,
    Lock,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 150px;
  margin: 0;
  padding: auto;
  .hr {
    color: blue;
    border: 0.5px solid lightgray;
}
`;
const Wrapper = styled.div` 
padding: 0px 90px 0px 0px;  
marign: 10px;
height: 100%;
width: 100px;
.icon{
    font-size: 20px;
    color: blue;
}

`;

const Logo = styled.div`
  width: 200px;
  height: 50px;
`;
const DataTable = styled.div`
    padding-right: 0;
    cursor: pointer;
    &:hover {
      background-color: #E0FFFF;
    }
   
`;

const Profile = styled.div`
cursor: pointer;
&:hover {
  background-color: #E0FFFF;
}

padding-right: 25px;

`;
const SignIn = styled.div`
padding-right: 25px;
cursor: pointer;
&:hover {
  background-color: #E0FFFF;
}

  
`;
const HomeDashBoard = styled.div`
cursor: pointer;
&:hover {
  background-color: #E0FFFF;
}

`;

export default function SideBar() {
    return (
        <Container>
            <Logo>Logo</Logo>

            <hr />
            <Wrapper>

                <HomeDashBoard >
                    <Home className="icon" />
                    Daskboard
                </HomeDashBoard>
                <DataTable >
                    <Leaderboard className="icon" />
                    Data Table
                </DataTable >
                <Profile >
                    <Person className="icon" />
                    Profile
                </Profile>
                <SignIn >
                    <Lock className="icon" />
                    Sign in
                </SignIn>
            </Wrapper>
        </Container>
    );
}
