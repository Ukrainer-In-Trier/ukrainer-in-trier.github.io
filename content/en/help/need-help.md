---
author: 'Hugo Authors'
title: 'I need help'
---

<br>
<div class="form-help">
  <form id='needForm'>
  <label class="block text-m font-medium text-white-700" for="fname">First name:</label>
  <input class="inp block w-full rounded-md border dark:border-transparent pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-m" type="name" id="fname" name="fname" placeholder="Name"><br>
  <label for="email">Email address:</label><br>
  <input class="inp block w-full rounded-md border dark:border-transparent pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-m" type="email" id="email" name="email" placeholder="example@email.com"><br>
  <label for="text">What help do you need?</label><br>
  <textarea type="text" id="text" name="text" placeholder="I need ..." rows="5" cols="28" class="inp textarea__help block w-full rounded-md border dark:border-transparent pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-m""></textarea><br><br>
  <div class='hidden border p-2 mb-3' id='sending-mess'></div>
  <input class='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-m px-5 py-2.5 text-center mr-2 mb-2' style= 'cursor: pointer;' type="submit" value="Submit">
</form>
</div>

<!--more-->

---

{{< css.inline >}}

<style>
.emojify {
	font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
	font-size: 2rem;
	vertical-align: middle;
}


@media screen and (max-width:650px) {
  .nowrap {
    display: block;
    margin: 25px 0;
  }
}
</style>

{{< /css.inline >}}
