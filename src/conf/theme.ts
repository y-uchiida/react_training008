import { PlaylistAddCircleTwoTone } from '@mui/icons-material';
import { createTheme, useTheme } from '@mui/material'

/* Button コンポーネントにrounded バリアントを追加するため、
 * モジュール拡張でバリアントを追加しておく
 */
declare module "@mui/material/Button" {
	/* interface は、 <MUIコンポーネント名>PropsVariantOverrides */
	interface ButtonPropsVariantOverrides {
		rounded: true;
	}
}

export const palette = {
	primary: {
		light: '#e6ecf0',
		main: '#50b7f5',
		dark: '#1d9bf0'
	}
}

export const theme = createTheme({
	palette: palette,

	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained' },
					style: {
						borderRadius: '100vw',
						color: 'white'
					}
				}
			]
		}
	}
});
