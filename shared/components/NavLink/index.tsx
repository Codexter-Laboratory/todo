import React from "react";
import useTranslation from "../../../hooks/useTranslations";
import Link from "next/link";
import {Props} from "@fortawesome/react-fontawesome";

const NavLink = (props: Props) => {
    const { locale } = useTranslation();
    return (
        <Link href={`/[lang]${props.route}`} as={`/${locale + props.as}`}>
            <a className='nav-link'>{props.label}</a>
        </Link>
    );
};

export default NavLink;