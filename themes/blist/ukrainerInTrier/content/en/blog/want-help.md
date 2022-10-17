---
author: 'Hugo Authors'
title: 'I can help'
date: 2021-07-15
description: 'Guide to emoji usage in Hugo'
tags: ['help']
# thumbnail: https://picsum.photos/id/1050/400/250
---

<div class="form-help">
    <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="name" id="fname" name="fname" placeholder="Name"><br>
  <label for="mail">Mail address:</label><br>
  <input type="mail" id="mail" name="mail" placeholder="example@mail.com"><br>
  <label for="text">How can you help?</label><br>
  <input type="text" id="text" name="text" placeholder="I can ..."><br><br>
  <input type="submit" value="Submit">
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
