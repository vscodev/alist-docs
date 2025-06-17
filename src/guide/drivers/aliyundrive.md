---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 16
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Aliyundrive / Share

:::warning

This driver is not recommended for use, because it is not stable and may be blocked at any time and we will remove it in a future version.
We recommend using the official driver [Aliyundrive Open](./aliyundrive_open.md).

:::

:::tip

Due to the limitation of the referrer of Aliyundrive, the mobile token must be used. Using the desktop web token will result in failure to download and preview.
Of course, you can also turn on the proxy so that `refresh token` of desktop web can work if you use it locally or if the bandwidth is large enough.

:::

### **Refresh token**

Follow to this [issue](https://github.com/Xhofe/alist/issues/88) Capture/find the log on the mobile phone (`/data/media/0/Android/data/com.alicloud.databox/files/logs/trace/`).

### **Root folder file_id**

Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940, which is `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`:

![file_id](/img/drivers/aliyundrive.png)

### **Second pass**

Check the hash when uploading. If there is one in the cloud, directly generate the file without consuming traffic

### **Internal upload**

If the server you deploy Alist on is Aliyun ECS for Beijing area, turn on this switch to improve the upload speed. Do not turn on this switch for servers that do not meet the requirements, otherwise you will have problems with inability to upload.

<br/>

## **Aliyundrive Share Url**

It is no longer available, and the shared storage method will no longer be developed and maintained in the future. At the same time, the token obtained by [**AliyundriveOpen**](./aliyundrive_open.md) cannot be used in the Alibaba Cloud Disk shared mount storage.

<br/>

### **The default download method used**

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
