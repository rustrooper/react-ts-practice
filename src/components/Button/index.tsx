import type {ReactNode} from 'react'
import './styles.scss'

type ButtonType = 'main' | 'secondary'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonType
	tag: 'button' | 'a'
	children: ReactNode
	className?: string
	href?: string
}

export const Button = ({variant = 'main', tag, className, children, href, ...rest}: Props) => {
	if (tag === 'a')
		return (
			<a href={href} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
				{children}
			</a>
		)

	return (
		<button className={`${className} button_${variant}`.trim()} {...rest}>
			{children}
		</button>
	)
}
