import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let foundSuggestions = [];
  {
    console.log(foundSuggestions);
  }
  return `<div class="col-lg-6 col-md-8 mx-auto"><h1><a href="/" data-svelte-h="svelte-e15n19">Hello</a></h1> <form><input name="search" type="search" placeholder="Search location"> ${foundSuggestions.length > 0 ? `<ul>${each(foundSuggestions, (suggestion) => {
    return `<li class="flex px-4 py-2 border border-gray-200 bg-gray-50 hover:bg-gray-200"><a${add_attribute("href", suggestion.url, 0)}>${escape(suggestion.display_name)}</a> </li>`;
  })}</ul>` : ``}</form></div>`;
});
export {
  Page as default
};
