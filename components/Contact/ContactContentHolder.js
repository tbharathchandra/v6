import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const ContentWrapper = styled.span`
    h2 {
        font-size: 50px;
        margin: 0px 0px 30px;
        font-family: ${props => {
            return props.theme.calibre;
        }};
        font-weight: ${props => {
            return props.theme.semibold;
        }};
        color: ${props => {
            return props.theme.headWhite;
        }};
    }

    div {
        p {
            margin: 0px 0px 15px;
            font-size: 17px;
            line-height: 1.5;
            font-weight: medium;
            color: ${props => {
                return props.theme.skyBlue;
            }};
        }
    }

    a {
        margin-top: 50px;
    }
`;

const ContactContentHolder = ({ data: { attributes, html } }) => {
    const { title, mailText } = attributes;
    return (
        <ContentWrapper>
            <h2>{title}</h2>
            <div>{parse(html)}</div>
            <a
                href="mailto:iam@abhijithvijayan.in"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="button__main"
            >
                {mailText}
            </a>
        </ContentWrapper>
    );
};

export default ContactContentHolder;
