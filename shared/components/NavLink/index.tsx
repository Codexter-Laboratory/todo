import React from "react";
import useTranslation from "hooks/useTranslations";
import Link from "next/link";

interface Props {
     route: string;
    label:string;
    as:string;
}

const NavLink = (props: Props) => {
    const { locale } = useTranslation();
    return (
        <Link scroll={false} href={`/[lang]${props.route}`} as={`/${locale + props.as}`} >
            <a className='nav-link'>{props.label}</a>
        </Link>
    );
};

export default NavLink;
