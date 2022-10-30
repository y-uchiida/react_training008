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
import { Box, Button, IconButton, Theme } from '@mui/material';
import { palette } from '../../conf/theme';
import { fontWeight, SystemProps } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const style: SystemProps<Theme> = {
	minHeight: '100vh',
	borderRight: `1px solid ${palette.primary.light}`,
	pt: 1,
	paddingX: 2
}

const SideBar = () => {
	return (
		<Box sx={style}>
			<IconButton aria-label='home' size='large' sx={{ ':hover': { backgroundColor: palette.primary.light } }}>
				<TwitterIcon fontSize='large' color='primary' />
			</IconButton>
			<Grid container spacing={1}>
				<Grid>
					<SideBarMenu text='ホーム' icon={<HomeIcon />} />
				</Grid>
				<Grid>
					<SideBarMenu text="話題を検索" icon={<SearchIcon />} />
				</Grid>
				<Grid>
					<SideBarMenu text="通知" icon={<NotificationsNoneIcon />} />
				</Grid>
				<Grid>
					<SideBarMenu text="メッセージ" icon={<MailOutlineIcon />} />
				</Grid>
				<Grid>
					<SideBarMenu text="ブックマーク" icon={<BookmarkBorderIcon />} />
				</Grid>
				<Grid>
					<SideBarMenu text="リスト" icon={<ListAltIcon />} />
				</Grid>
				<Grid>
					<SideBarMenu text="プロフィール" icon={<PermIdentityIcon />} />
				</Grid>
				<Grid>
					<SideBarMenu text="もっとみる" icon={<MoreHorizIcon />} />
				</Grid>
			</Grid>

			<Button variant='contained' size='large' sx={{ mt: 3, fontWeight: 900, width: '96%' }} disableElevation>ツイートする</Button>
		</Box >
	)
}

export default SideBar
