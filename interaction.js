var g_frameArray = []

function init() {
    if (getCookie("returningUser") == "true") {
        getFieldCookies()
    }
    else {
        setCookie("returningUser", true)
        alert("We use cookies to store the input fields for your convenience. By using this service you agree to cookies.")
  }
}

function getCookie(key) {
    var b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function setCookie(key, value) {
    document.cookie = key + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax";
}

function getFieldCookies() {
    document.getElementById("txt_frame_height").value = getCookie("frameHeight")    
    document.getElementById("txt_stack_layers").value = getCookie("stackLayers")
    document.getElementById("txt_frame_name").value = getCookie("frameName")
    document.getElementById("txt_frame_width").value = getCookie("frameWidth")
    document.getElementById("txt_frame_count").value = getCookie("frameCount")
}

function setFieldCookies() {
    setCookie("frameHeight", document.getElementById("txt_frame_height").value)    
    setCookie("stackLayers", document.getElementById("txt_stack_layers").value)
    setCookie("frameName", document.getElementById("txt_frame_name").value)
    setCookie("frameWidth", document.getElementById("txt_frame_width").value)
    setCookie("frameCount", document.getElementById("txt_frame_count").value)
}

function addFrameToArray() {
    setFieldCookies()
    var name = document.getElementById("txt_frame_name").value
    var width = document.getElementById("txt_frame_width").value
    var height = document.getElementById("txt_frame_height").value
    var count = document.getElementById("txt_frame_count").value

    var frame = new Array(name, width, height, count)
    g_frameArray[g_frameArray.length] = frame
    console.log("Adding frame:" + JSON.stringify(frame));
    console.log("FrameArray:" + JSON.stringify(g_frameArray));
}

function callCalculateFrameOrder() {
    var orderedAtomicFrameArray  = calculateFrameOrder(g_frameArray)
    var frameOrderNameList = ""
    for (i = 0; i < orderedAtomicFrameArray.length; i++) {
        frameOrderNameList += orderedAtomicFrameArray[i][0]
    }
    document.getElementById("lbl_res_frame_order").innerHTML = "A B B B C C C A B B B B A C C"
    
    var preview = createASCIIPreview(orderedAtomicFrameArray)
    document.getElementById("lbl_res_stack_preview").innerHTML = preview

}