import React from 'react'
import { SideBarMenu } from './SideBarMenu';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';

const SideBar = () => {
	return (
		<>
			<TwitterIcon sx={{ width: '200px' }} />
			<SideBarMenu text='ホーム' icon={<HomeIcon />} />
			<SideBarMenu text="話題を検索" icon={<SearchIcon />} />
			<SideBarMenu text="通知" icon={<NotificationsNoneIcon />} />
			<SideBarMenu text="メッセージ" icon={<MailOutlineIcon />} />
			<SideBarMenu text="ブックマーク" icon={<BookmarkBorderIcon />} />
			<SideBarMenu text="リスト" icon={<ListAltIcon />} />
			<SideBarMenu text="プロフィール" icon={<PermIdentityIcon />} />
			<SideBarMenu text="もっとみる" icon={<MoreHorizIcon />} />

			<Button variant='outlined'>ツイートする</Button>
		</>
	)
}

export default SideBar
