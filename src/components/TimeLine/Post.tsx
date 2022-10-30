import React from 'react'
import { Avatar, IconButton, Paper, styled, Theme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PostContent from '../../Entities/PostContent';
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import IconTextButton from '../atoms/IconTextButton';
import { palette } from '../../conf/theme';
import { red, green, lightGreen, pink } from '@mui/material/colors';

interface props {
	postContent: PostContent
}

const WrapBox = styled(Box)({
	display: 'flex',
	flexDirection: 'row'
});

const wrapBoxStyle = {
	p: 2,
	columnGap: 1
};

const Header = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center'
});

const ImageContainer = styled(Paper)({
	borderRadius: 16,
	border: '1px solid inherit',
	overflow: 'hidden',
	width: '100%',
	height: 'auto',
	'& img': {
		width: 'calc(50% - 0.5px)',
		height: 'auto',
		'&:nth-of-type(2n+1):last-child': {
			width: '100%'
		}
	}
});

const ImageContainerStyle = {
	display: 'flex',
	flexWrap: 'wrap',
	mt: 1,
	rowGap: '1px',
	columnGap: '1px',
}

const Footer = styled(Grid)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyItems: 'start',
	height: 'auto',
	'& Grid': {
		':hover': {

		}
	},
	'& IconButton': {
	},
});

const FooterStyle = {
	mt: 1
};

const Post = ({ postContent }: props) => {
	return (
		<WrapBox sx={wrapBoxStyle}>
			<Avatar src={postContent.authorAvatar ?? undefined} />
			<Box display='flex' flexDirection='column' sx={{ width: '100%' }}>
				<Header>
					<Typography fontWeight={600}>{postContent.authorName}</Typography>
					<VerifiedUser fontSize='small' color='primary' />
					<Typography>{postContent.authorId}</Typography>
				</Header>
				<Typography variant='subtitle1' component='p'>
					{postContent.content}
				</Typography>
				{postContent.imageUrl ?
					<ImageContainer sx={ImageContainerStyle} elevation={0}>
						<>
							{postContent.imageUrl?.map((url, index) => {
								return <img src={url} key={index} />
							})}
						</>
					</ImageContainer>
					:
					<></>
				}
				<Footer container sx={FooterStyle}>
					<Grid xs={3}>
						<IconTextButton
							icon={<ChatBubbleOutline />}
							text='111'
							hoverColor={palette.primary.main} />
					</Grid>

					<Grid xs={3}>
						<IconTextButton
							icon={<Repeat />}
							text='222'
							hoverColor={lightGreen[600]} />
					</Grid>

					<Grid xs={3}>
						<IconTextButton
							icon={<FavoriteBorder />}
							text='333'
							hoverColor={pink[400]} />
					</Grid>

					<Grid xs={3}>
						<IconTextButton
							icon={<PublishOutlined />}
							hoverColor={palette.primary.main} />
					</Grid>
				</Footer>
			</Box>
		</WrapBox>
	)
}

export default Post
