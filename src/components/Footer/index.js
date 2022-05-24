import React from 'react';
import './style.css';

function Footer() {
    return (
        <footer className="p-0 mb-0 bg-white text-dark fixed-bottom">
			<div className="pr-3 py-3">
				<p className="foot">Daniel Birmingham | &copy; 2022 | &nbsp;
                    <a href="https://github.com/Prolix19/" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    ㆍ
                    <a href="https://www.linkedin.com/in/dtb19/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    ㆍ
                    <a href="https://twitter.com/Prolix19" target="_blank" rel="noreferrer">
                        Twitter
                    </a>
				</p>
			</div>
		</footer>
    );
};

export default Footer;