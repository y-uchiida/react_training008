import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { Input, InputAdornment, styled, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import { palette } from '../../conf/theme';
import { grey } from '@mui/material/colors';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

const WrapBox = styled(Grid)({
	display: 'flex',
	flexDirection: 'column',
	minHeight: '100vh',
	overflowY: 'hidden',
	scrollbarWidth: 'none',
	'&::-webkit-scrollbar': {
		width: '0',
	},
});

const WrapBoxStyle = {
	pt: 1,
	pb: 0,
	pl: 1,
	rowGap: 2,
	overflowY: 'scroll',
	scrollbarWidth: 'none',
	'&::-webkit-scrollbar': {
		width: '0',
	},
}

const SearchBar = styled(TextField)({
	borderRadius: '50vh',
	backgroundColor: grey[100],
	'& .MuiOutlinedInput-notchedOutline': {
		borderRadius: '50vh',
		borderWidth: '0px',
		border: `0px none inherit`,
		':hover': {
			border: `0.5px solid ${palette.primary.main}`,
		}
	},
});

const searchBarStyle = {
	'& input': {
		py: 1.5,
		':hover': {
			border: 'none'
		}
	},
}

const Widget = () => {
	return (
		<WrapBox container sx={WrapBoxStyle}>
			<SearchBar
				id="searchBar"
				placeholder='キーワード検索'
				variant='outlined'
				sx={searchBarStyle}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Search />
						</InputAdornment>
					),
				}}
			/>
			<Box sx={{
				backgroundColor: palette.primary.light,
				borderRadius: 3,
				pt: 2,
				px: 1.5,
				overflowY: 'scroll',
				scrollbarWidth: 'none',
				'&::-webkit-scrollbar': {
					width: '0',
				},
			}}>
				<Typography variant='h5' component='h4' fontWeight={600}>いまどうしてる？</Typography>
				<TwitterTweetEmbed
					tweetId={'1508838714180612100'}
				/>
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="reactjs"
					options={{ height: '280' }}
				/>
				<TwitterShareButton
					url={'https://ja.reactjs.org/'}
					options={{ text: '#reactjs is awesome' }}
				/>
			</Box>
		</WrapBox>
	)
}

export default Widget
