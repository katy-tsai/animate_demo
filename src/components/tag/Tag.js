import React from 'react';

const Tag = ({text,className}) => {
    let label=text;
    let style="";
    if(text?.includes(":")){
        let info=text.split(":");
        [style,label]=info;
    }
   

    return (
        <span className={['tag_span',className,style].join(" ")}>
           { `# ${label}`}
        </span>
    );
};

export default Tag;