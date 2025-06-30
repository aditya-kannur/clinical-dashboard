#!groovy
import jenkins.model.*
import hudson.security.*

def instance = Jenkins.getInstance()
def hudsonRealm = new HudsonPrivateSecurityRealm(false)

// Create new user: username: newadmin, password: newpassword123
hudsonRealm.createAccount("newadmin", "newpassword123")
instance.setSecurityRealm(hudsonRealm)
instance.save()
