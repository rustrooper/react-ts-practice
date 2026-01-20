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

type MyReadonly<T> = {
	readonly [K in keyof T]: T[K]
}

type ReadonlyProps = MyReadonly<Props>

export const Button = ({variant = 'main', tag, className, children, href, ...rest}: ReadonlyProps) => {
	href = 'test'
	alert(href)
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
