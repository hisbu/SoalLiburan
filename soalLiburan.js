function getSquare(a) {
    var num = a.toString()
    var result = ''
    for (var i = 0; i < num.length; i++) {
        result += num[i] * num[i]
    }
    return result
}

console.log(getSquare(121)) //should return 141
console.log(getSquare(553)) //should return 25259
console.log(getSquare(44991)) //should return 161681811
console.log('\n======================================\n')

var Input = ["Ryan", "Kieran", "Jason", "Yous"] // Output = ["Ryan", "Yous"]
function friends(name) {
    var result = []
    for (var i = 0; i < name.length; i++) {
        if (name[i].length == 4) {
            result.push(name[i])
        }
    }
    return result
}
console.log(friends(Input))
console.log('\n======================================\n')

function domainName(domain) {
    var string = ''
    var result = ''
    var flag = false
    for (var i = domain.length - 1; i > 0; i--) {
        if (domain[i] == '.' && flag == false) {
            flag = true
        } else if (domain[i] == '.' || domain[i] == '/' && flag == true) {
            flag = false
        }

        if (domain[i] != '.' && flag == true) {
            string += domain[i]
        }

    }
    for (var i = string.length - 1; i >= 0; i--) {
        result += string[i]
    }
    return result
}
console.log(domainName("http://github.com/carbonfive/raygun")) // == "github"
console.log(domainName("http://www.zombie-bites.com")) // == "zombie-bites"
console.log(domainName("https://www.cnet.com")) // == "cnet"
console.log(domainName("https://www.cnetw.com")) // == "cnet"