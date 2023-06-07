import { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import Search from "../assets/icon-search.svg";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import Location from "../assets/icon-location.svg";
import Website from "../assets/icon-website.svg";
import Twitter from "../assets/icon-twitter.svg";
import Company from "../assets/icon-company.svg";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';




const MainDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  "@media (min-width: 768px)": {
    width: "573px",
  },

  "@media (min-width: 1440px)": {
    width: "730px",
  }
});

const HeaderDiv = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});


const BrightnessDiv = styled(Box)({
  display: "flex",
  alignItems: "center",
  columnGap: "16px",
  cursor: "pointer",
});

const BrightnessText = styled(Typography)(({ darkmode }) => ({
    fontWeight: "700",
    fontSize: "13px",
    lineHeight: "19px",
    letterSpacing: "2.5px",
    color: darkmode === "true" ? "#FFFFFF": "#4B6A9B",
}));

const Logo = styled(Typography)(({ darkmode }) => ({
  fontWeight: "700",
  fontSize: "26px",
  lineHeight: "39px",
  color: darkmode === "true" ? "#FFFFFF" : "#222731",
}));

const SearchDiv = styled(Box)(({ darkmode}) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "7px 7px 8px 16px",
  alignItems: "center",
  marginTop: "36px",
  backgroundColor: darkmode === "true" ? "#1E2A47" : "#FEFEFE",
  width: "100%",
  borderRadius: "15px",
  boxShadow: darkmode === "true" ? "" : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
  "@media (min-width: 768px)" : {
    padding: "10px 10px 10px 32px",
  },
}));

const UserNameInput = styled(Input)(({ darkmode }) => ({
  color: darkmode === "true" ? "#FFFFFF" : "#222731",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "25px",
  paddingLeft: "10px",

  '&::before': {
      borderBottom: "0",
      content: "none",
  },
  '&::after': {
    borderBottom: "none",
    border: "none",
    content: "none",
  },

  '& input::placeholder': {
      opacity: 1,
      fontSize: "13px",
      color: darkmode === "true" ? "#FFFFFF" : "#4B6A9B",
      fontWeight: "400",
      lineHeight: "25px",
  },

  "@media (min-width: 1440px)": {
    width: "440px",
    '& input::placeholder': {
      opacity: 1,
      fontSize: "18px",
      color: darkmode === "true" ? "#FFFFFF" : "#4B6A9B",
      fontWeight: "400",
      lineHeight: "25px",
  },

  },
}));

const ErrorMessage = styled(Typography)({
  color: "#F74646",
  fontWeight: "700",
  fontSize: "15px",
  lineHeight: "22px",
  whiteSpace: "nowrap",
  paddingRight: "7px",
});

const SubmitFirstPart = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const SubmitSecondPart = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const SearchButton = styled(Button)({
    background: "#0079FF",
    color: "#FFFFFF",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "21px",
    textTransform: "capitalize",
    padding: "13px 14px 13px 18px",

    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "24px",
      padding: "13px 23px 14px 24px",
    }
});

const SecondPart = styled(Box)(({ darkmode }) => ({
    padding: "32px 24px 48px 24px",
    backgroundColor: darkmode === "true" ? "#1E2A47" : "#FEFEFE",
    borderRadius: "15px",
    boxShadow: darkmode === "true" ? "" : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
    marginTop: "16px",

    "@media (min-width: 768px)": {
      padding: "40px 40px 44px 40px",
    },
    "@media (min-width: 768px)": {
      padding: "48px",
    }
}));

const MainInfo = styled(Box)({
    display: "flex",
    columnGap: "20px",

    "@media (min-width: 1440px)": {
      columnGap: "37px",
    }
})

const Avatar = styled("img")({
    width: "70px",
    borderRadius: "100%",
    "@media (min-width: 768px)" : {
      width: "117px",
    }
});

const StyledUserName = styled(Typography)(({ darkmode }) => ({
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "24px",
    color: darkmode === "true" ? "#FFFFFF" : "#2B3442",

    "@media (min-width: 768px)": {
      fontSize: "26px",
      lineHeight: "39px",
    }
}));

const Login = styled(Typography)({
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "19px",
    color: "#0079FF",

    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "24px",
    }
});

const JoinedDate = styled(Typography)(({ darkmode }) => ({
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "19px",
    color: darkmode === "true" ? "#FFFFFF" : "#697C9A",
    marginTop: "6px",

    "@media (min-width: 768px)": {
      fontSize: "15px",
      lineHeight: "22px",
    },
    "@media (min-width: 1440px)":{
      display: "none",
    }
}));

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `Joined ${day} ${month} ${year}`;
};

const InfoText = styled(Typography)(({ darkmode }) => ({
    marginTop: "34px",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "25px",
    color: darkmode === "true" ? "#FFFFFF" : "#4B6A9B",

    "@media (min-width: 768px)": {
      fontSize: "15px",
      marginTop: "24px",
    },
    "@media (min-width: 1440px)": {
      marginTop: "-40px",
    }
}));

const ProfileStats = styled(Box)( ({darkmode}) => ({
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: darkmode === "true" ? "#141D2F" : "#F6F8FF",
  borderRadius: "10px",
  padding: "16px 14px 19px 15px",
  marginTop: "23px",

  "@media (min-width: 768px)": {
    marginTop: "32px",
  }
}));

const StatsDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (min-width: 768px)": {
    alignItems: "flex-start",
  }
});

const Stat = styled(Typography)(({darkmode}) => ({
  fontWeight: "400",
  fontSize: "11px",
  lineHeight: "16px",
  textAlign: "center",
  color: darkmode === "true" ? "#FFFFFF" : "#4B6A9B",

  "@media (min-width: 768px)": {
    fontSize: "13px",
    lineHeight: "19px",
  }
}));

const StatNumbers = styled(Typography)(({darkmode}) => ({
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center",
  color: darkmode === "true" ? "#FFFFFF" : "#2B3442",

  "@media (min-width: 768px)": {
    fontSize: "22px",
    lineHeight: "33px",
  }
}));

const ProfileInfo = styled(Box)({
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
  rowGap: "16px",

  "@media (min-width: 768px)" : {
    marginTop: "30px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  "@media (min-width: 1440px)" : {
    marginTop: "37px",
  },
});

const ProfileInfos = styled(Box)({
  display: "flex",
  alignItems: "center",
  columnGap: "16px",
  "&.isNull": {
    opacity: 0.3,
  },
});

const ProfileInfoText = styled(Typography)(({darkmode}) => ({
  fontWeight: "400",
  fontSize: "13px",
  lineHeight: "19px",
  color: darkmode === "true" ? "#FFFFFF" : "#4B6A9B",
  "@media (min-width: 768px)" : {
    fontSize: "15px",
    lineHeight: "22px",
  },
  
}));

const ProfileInfoLink = styled(Link)(({darkmode}) => ({
  textDecoration: "none",
  fontWeight: "400",
  fontSize: "13px",
  lineHeight: "19px",
  color: darkmode === "true" ? "#FFFFFF" : "#4B6A9B",

  '&:hover': {
    textDecoration: "underline",
  },

  "@media (min-width: 768px)" : {
    fontSize: "15px",
    lineHeight: "22px",
  },
}));

const ProfileInfoFirstPart = styled(Box)({
  display: "flex",
  rowGap: "16px",
  flexDirection: "column",
});

const ProfileInfoSecondPart = styled(Box)({
  display: "flex",
  rowGap: "16px",
  flexDirection: "column",
  "@media (min-width: 768px)" : {
  }
});

const BasicInfoDiv = styled(Box)({
  "@media (min-width: 1440px)": {
    marginLeft: "24%",
  }
});

const NamesDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});


const JoinedDateDesktopDiv = styled(Box)({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  justifyContent: "space-between",
});

const JoinedDateDesktop = styled(Typography)(({ darkmode }) => ({
  display: "none",
  fontWeight: "400",
  fontSize: "13px",
  lineHeight: "19px",
  color: darkmode === "true" ? "#FFFFFF" : "#697C9A",
  "@media (min-width: 1440px)": {
    fontSize: "15px",
    lineHeight: "22px",
    display: "flex",
  },
}));

const Githubuser = () => {

  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);

  const lightChanger = () => {
    setDarkMode((darkMode) => !darkMode);
  };
    const [userName, setUserName] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [userLogin, setUserLogin] = useState("");
    const [joinDate, setJoinDate] = useState("");
    const [bio, setBio] = useState("");
    const [repos, setRepos] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [twitter, setTwitter] = useState("");
    const [company, setCompany] = useState("");
    const [searchUser, setSearchUser] = useState("");
    const [user, setUser] = useState("octocat");
    const [noResult, setNoResult] = useState(false);

    const handleInputText = (event) => {
      setSearchUser(event.target.value);
    };

    const handleClick = () => {
      setUser(searchUser);
    }
  
    const instance = axios.create({
      baseURL: "  https://api.github.com/users/",
      headers: {accept: "application/json", "content-Type": "application/json"},
    });
  
    const getData = async () => {
      try {
        const response = await instance.get("/" + user);
        console.log(response.data);
        setUserName(response.data.name);
        setUserAvatar(response.data.avatar_url);
        setUserLogin(response.data.login);
        setJoinDate(response.data.created_at);
        setRepos(response.data.public_repos);
        setFollowers(response.data.followers);
        setFollowing(response.data.following);
        setLocation(response.data.location);
        setWebsite(response.data.blog);
        setTwitter(response.data.twitter_username);
        setCompany(response.data.company);
        setBio(response.data.bio);

        setNoResult((result) => result = false);
        

      } catch (error) {
        console.error(error);
        setNoResult((result) => result = true);
      }
    };
  
    useEffect(() => {
        getData();
      }, [user]);

    useEffect(() => {
      if (darkMode) {
        document.body.style.background = "#141D2F";
      } else {
        document.body.style.background = "#F6F8FF";
      }
    }, [darkMode]);

    return (
    <MainDiv>
    <HeaderDiv>
        <div>
            <Logo darkmode={darkMode.toString()}>devfinder</Logo>
        </div>
      <BrightnessDiv onClick={lightChanger}>
        <BrightnessText darkmode={darkMode.toString()}>{darkMode ? "LIGHT" : "DARK"}</BrightnessText>
        <img src={darkMode ? Sun : Moon} alt=""/>
      </BrightnessDiv>
    </HeaderDiv>

    <SearchDiv darkmode={darkMode.toString()}>
      <SubmitFirstPart>
        <img src={Search}  alt="" />
        <UserNameInput darkmode={darkMode.toString()} type="text" placeholder='Search GitHub username...' onChange={handleInputText}/>
      </SubmitFirstPart>
  
      <SubmitSecondPart>
        <ErrorMessage>{noResult ? "No Results" : ""}</ErrorMessage>
        <SearchButton onClick={handleClick}>Search</SearchButton>
      </SubmitSecondPart>

    </SearchDiv>


    <SecondPart darkmode={darkMode.toString()}>
        <MainInfo>
            <div>
                <Avatar src={userAvatar} alt="" />
            </div>

            <NamesDiv>
              <JoinedDateDesktopDiv>
                <StyledUserName darkmode={darkMode.toString()} >{userName}</StyledUserName>
                <JoinedDateDesktop darkmode={darkMode.toString()}>{formatDate(joinDate)}</JoinedDateDesktop>
              </JoinedDateDesktopDiv>

                <Login>@{userLogin}</Login>
                <JoinedDate darkmode={darkMode.toString()}>{formatDate(joinDate)}</JoinedDate>
            </NamesDiv>
        </MainInfo>


        <BasicInfoDiv>
            <InfoText darkmode={darkMode.toString()}>{bio ? bio : "This profile has no bio"}</InfoText>

            <ProfileStats darkmode={darkMode.toString()}>
                <StatsDiv>
                    <Stat darkmode={darkMode.toString()}>Repos</Stat>
                    <StatNumbers darkmode={darkMode.toString()}>{repos}</StatNumbers>
                </StatsDiv>
                <StatsDiv>
                    <Stat darkmode={darkMode.toString()}>Followers</Stat>
                    <StatNumbers darkmode={darkMode.toString()}>{followers}</StatNumbers>
                </StatsDiv>
                <StatsDiv>
                    <Stat darkmode={darkMode.toString()}>Following</Stat>
                    <StatNumbers darkmode={darkMode.toString()}>{following}</StatNumbers>
                </StatsDiv>
            </ProfileStats>


            <ProfileInfo>
              <ProfileInfoFirstPart>
                <ProfileInfos className={location ? "" : "isNull"}>
                  {<svg
                    height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" 
                    fill={darkMode ? "#FFFFFF" : "#4b6a9b"}/>
                  </svg>}
                  <ProfileInfoText darkmode={darkMode.toString()}>{location ? location : "Not Available"}</ProfileInfoText>
                </ProfileInfos>

                <ProfileInfos className={website ? "" : "isNull"}>
                  <svg
                    height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g 
                    fill={darkMode ? "#FFFFFF" : "#4b6a9b"}><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"/></g>
                  </svg>
                  {website ? (<ProfileInfoLink darkmode={darkMode.toString()} href={website} target="_blank" rel="noopener noreferrer">{website}</ProfileInfoLink>
                  ) : (<ProfileInfoText darkmode={darkMode.toString()}>Not Available</ProfileInfoText>)}
                </ProfileInfos>
              </ProfileInfoFirstPart>

              <ProfileInfoSecondPart>
                <ProfileInfos className={twitter ? "" : "isNull"}>
                  <svg 
                    height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" 
                    fill={darkMode ? "#FFFFFF" : "#4b6a9b"}/>
                  </svg>
                  {twitter ? (<ProfileInfoLink darkmode={darkMode.toString()} href={twitter} target="_blank" rel="noopener noreferrer">{twitter}</ProfileInfoLink>
                  ) : (<ProfileInfoText darkmode={darkMode.toString()}>Not Available</ProfileInfoText>)}
                </ProfileInfos>

                <ProfileInfos className={company ? "" : "isNull"}>
                  <svg
                    height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g 
                    fill={darkMode ? "#FFFFFF" : "#4b6a9b"}><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/></g>
                  </svg>
                  <ProfileInfoText darkmode={darkMode.toString()}>{company ? company : "Not Available"}</ProfileInfoText>
                </ProfileInfos>
              </ProfileInfoSecondPart>
            </ProfileInfo>
        </BasicInfoDiv>
    </SecondPart>
    </MainDiv>
)}

export default Githubuser;